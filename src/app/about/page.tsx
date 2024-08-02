import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import styles from './About.module.css';
import { PrismicNextLink } from '@prismicio/next';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('about');

  return (
    <section className={styles.Main}>
      <section className={styles.LeftContainer}>
        <div className={styles.TitleContainer}>
          <PrismicRichText field={page.data.cv_title} />
        </div>
        <div className={styles.PersonalInformation}>
          <>
            {page.data.personal_information.map((item, index) => {
              return (
                <PrismicRichText
                  field={item.personal_information_field}
                  key={index}
                />
              );
            })}
          </>
        </div>
        <div className={styles.ContactInformation}>
          {page.data.contact_information.map((item, index) => {
            return (
              <PrismicRichText
                field={item.contact_information_field}
                key={index}
              />
            );
          })}
        </div>
        <div className={styles.EducationInformation}>
          {page.data.education_information.map((item, index) => {
            return (
              <div className={styles.Education} key={index}>
                <div>
                  <PrismicRichText field={item.education_date} />
                </div>
                <div>
                  <PrismicRichText field={item.education_type} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.EducationInformation}>
          {page.data.award_information.map((item, index) => {
            return (
              <div className={styles.Education} key={index}>
                <div>
                  <PrismicRichText field={item.award_date} />
                </div>
                <div>
                  <PrismicRichText field={item.award_type} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.EducationInformation}>
          {page.data.residency_information.map((item, index) => {
            return (
              <div className={styles.Education} key={index}>
                <div>
                  <PrismicRichText field={item.residency_date} />
                </div>
                <div>
                  <PrismicRichText field={item.residency_type} />
                </div>
              </div>
            );
          })}
        </div>{' '}
        <div className={styles.EducationInformation}>
          {page.data.extra_information.map((item, index) => {
            return (
              <div className={styles.ExtraInformation} key={index}>
                <PrismicRichText field={item.extra_information_text} />
                <PrismicNextLink field={item.extra_information_link}>
                  <PrismicRichText field={item.extra_information_link_text} />
                </PrismicNextLink>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.RightContainer}>
        <div className={styles.TitleContainer}>
          <PrismicRichText field={page.data.cv_title} />
        </div>
      </section>
    </section>
  );

  //   return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('about');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
