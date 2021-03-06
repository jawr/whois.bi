FROM golang:alpine AS builder

WORKDIR /build

COPY go.mod go.sum ./
RUN go mod download

COPY . .

ARG service
RUN GOOS=linux \
	CGO_ENABLED=0 \
	GOARCH=amd64 \
	go build -a -o service pkg/services/${service}/main.go

# actual service image
FROM alpine:latest

WORKDIR /srv

# we need real certs for email
RUN apk add ca-certificates

COPY --from=builder /build/service .

CMD ["./service"]
