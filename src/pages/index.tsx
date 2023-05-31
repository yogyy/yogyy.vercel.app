'use client';

import clsx from 'clsx';
import * as React from 'react';
import { Accent } from '@/components/accent';
import ButtonLink from '@/components/links/buttonlink';
import UnstyledLink from '@/components/links/unstyledlink';
import { scrollToSection } from '@/components/clientComponent/scrollToId';
import IsLoaded from '@/components/isLoaded';
import Typewritterz from '@/components/typewritter';
import { projects } from '@/components/clientComponent/projectlist';
import RootLayout from '@/components/layouts/layout';
import { InView } from 'react-intersection-observer';
import ProjectCard from '@/components/ProjectCard';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { IoNewspaperSharp } from 'react-icons/io5';
import TechSection, { MarqueeTech } from '@/components/tech/techsection';
import { Me } from './about';

export default function Home() {
  return (
    <RootLayout pageTitle="yogyy" content="Muhammad Yogi Firman Syah Webstie Portofolio">
      <IsLoaded className="relative flex flex-col justify-center mb-20 min-h-main bgpattern">
        <article className={`mx-auto layout`}>
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl" gaya-fade="1">
            Hi~
          </h1>
          <h2 gaya-fade="2" className="mt-1 text-3xl md:text-5xl 2xl:text-6xl">
            You can call me&nbsp;
            <Accent>Yogyy</Accent>
          </h2>
          <Typewritterz />
          <p gaya-fade="5" className="max-w-4xl mt-4 md:mt-6 md:text-lg 2xl:text-xl">
            I work with react js and next js. Lorem ipsum dolor sit. <br /> I am constantly
            expanding my knowledge and experience in the field
          </p>
          <div gaya-fade="6" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <div className="relative group">
              <div
                className={clsx(
                  'absolute -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-light-primary to-light-secondary',
                  'dark:from-dark-primary dark:to-dark-secondary',
                  'opacity-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink
                href="#about"
                onClick={() => scrollToSection('about')}
                className="bg-light-primary text-light-bg dark:bg-dark-primary dark:text-dark-text dark:border-dark-primary"
              >
                Scroll down
              </ButtonLink>
            </div>
            <ButtonLink
              className="bg-light-secondary text-light-primary dark:bg-dark-secondary dark:text-dark-primary"
              href="/about"
            >
              Learn more about me
            </ButtonLink>
          </div>
          <div gaya-fade="7" className="flex flex-wrap gap-4 mt-4 gap-y-2 md:mt-8">
            <UnstyledLink
              href="/"
              onClick={() => console.warn('my resume not ready')}
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent ',
                'transition-colors'
              )}
            >
              <IoNewspaperSharp className="shrink-0" />
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://twitter.com/yogyxx"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'group text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent ',
                'transition-colors'
              )}
            >
              <SiTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2] group-focus:text-[#1da1f2]" />
              <span>@yogyxx</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://github.com/yogyy"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
                'transition-colors'
              )}
            >
              <SiGithub />
              <span>yogyy</span>
            </UnstyledLink>
          </div>
        </article>
      </IsLoaded>

      <InView triggerOnce rootMargin="-50% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={clsx('py-20 layout h-full', inView && 'fade-in-start')}>
            <Me />
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={clsx('py-20 layout', inView && 'fade-in-start')}>
            <div className="mt-10">
              <h2 gaya-fade="1">
                <Accent>Skills</Accent>
              </h2>
              <article className="mt-6">
                <div className="grid grid-cols-1 gap-12">
                  <div className="flex flex-col gap-6">
                    <div gaya-fade="2" className="flex flex-row items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      <h3 className="text-lg font-medium">Web development</h3>
                    </div>
                    <p gaya-fade="3">
                      I have experience in web development with React and Next.js, and I am
                      proficient in HTML, CSS, JavaScript, and TypeScript
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div gaya-fade="4" className="flex flex-row items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" x2="20" y1="19" y2="19"></line>
                      </svg>
                      <h3 className="text-lg font-medium">Other technologies</h3>
                    </div>
                    <p gaya-fade="5">
                      Familiar with and frequent user of common software development tools, such as
                      git .
                    </p>
                    <p gaya-fade="6">
                      Know how to utilise assistive<span className="peer"> </span>
                      <span className="relative after:absolute after:content-['Yes,_they_are_Google,_StackOverflow_and_ChatGPT!'] after:text-xs after:right-0 after:bottom-full after:w-fit after:bg-light-bg dark:after:bg-dark-bg after:p-2 after:border after:rounded after:border-light-primary after:opacity-0 hover:after:opacity-100 peer-hover:after:opacity-100 after:transition underline">
                        technologies
                      </span>
                      &nbsp;to enhance productivity.
                    </p>
                  </div>
                </div>
              </article>
              <div gaya-fade="7" className="h-full">
                <h3 className="mt-14">
                  <Accent>Tech Stack</Accent>
                </h3>
                <TechSection className="mt-6" />
              </div>
            </div>
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={clsx('py-20', inView && 'fade-in-start')}>
            <article className="layout" gaya-fade="0">
              <h2>
                <Accent>Features Project</Accent>
              </h2>
              <p className="mt-2">Showcase of my works on frontend development.</p>
              <ul gaya-fade="1" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
          </section>
        )}
      </InView>
      <div className="h-[20vh]" />
    </RootLayout>
  );
}
