import React from 'react'

export default ({ children }) => (
	<div className="mw9 center db border-box">
		{children}
	</div>
)

export const Page = ({ children, loading }) => {

	if (loading === true) {
		return (
		<section className="dtc v-mid tc ph3 ph4-l pv5">
			<Loader />
		</section>
		)
	}

	return (
		<section className="dtc v-mid tc ph3 ph4-l pv5">
			{children}
		</section>
	)
}

export const Loader = () => (
	      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="green">
        <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
      </svg>
)

