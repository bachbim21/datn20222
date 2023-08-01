import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Hướng dẫn dành cho',
		Svg: require('../../static/img/home/admin.svg').default,
		object: "Quản trị viên oneSME",
		to: "/docs/admin/gioi-thieu"
	},
	{
		title: 'Hướng dẫn dành cho',
		Svg: require('../../static/img/home/dev.svg').default,
		object: "Nhà phát triển",
		to: "/docs/dev/gioi-thieu"

	},
	{
		title: 'Hướng dẫn dành cho',
		Svg: require('../../static/img/home/sme.svg').default,
		object: "Khách hàng",
		to: "/docs/sme/gioi-thieu"
	},
];

function Feature({ Svg, title, object, to }) {
	return (
		<div className={clsx('col col--4 feature')}>
		<a href={to}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<span>{title}</span>
				<p style={{ fontWeight: 600}}>{object}</p>
			</div>
		</a>

		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
