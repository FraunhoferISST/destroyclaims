import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Professionalize Destroyment',
    description: (
      <>
        Use the Destroy Claims to describe exactly how you want your data to be destroyed.
      </>
    ),
  },
  {
    title: 'Agnostic',
    description: (
      <>
        Destroy Claims do not dictate the environment in which they are used.
        They can be used flexibly in a wide variety of environments.
      </>
    ),
  },
  {
    title: 'Simple',
    description: (
      <>
        Destroy Claims should be as easy to interpret as possible.
        Therefore, a structure that speaks for itself is used.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
