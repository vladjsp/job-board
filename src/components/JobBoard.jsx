import React from 'react';
import JobItem from './ui-elements/JobItem';
import CardJobPost from './ui-elements/CardJobPost';

import { jobsList } from '../helpers/latestJobs';

const JobBoard = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-full max-w-[849px] mr-7'>
        <div className='grid auto-cols-[1fr] gap-4 grid-cols-[1fr] grid-rows-[auto] mb-12'>
          <h2 className='mb-6 mt-0 text-[#171728] text-3xl font-medium '>Featured jobs</h2>
          <JobItem
            logo='https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg'
            title='Backend Software Engineer'
            company='Webflow'
            location='Remote'
            level='Senior'
            department='Development'
            featured={true}
          />
          <JobItem
            logo='https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg'
            title='Backend Software Engineer'
            company='Webflow'
            location='Remote'
            level='Senior'
            department='Development'
            featured={true}
          />
        </div>
        <div className='grid auto-cols-[1fr] gap-4 grid-cols-[1fr] grid-rows-[auto]'>
          <h2 className='mb-6 mt-0 text-[#171728] text-3xl font-medium '>Latest jobs</h2>
          {jobsList.map((job) => (
            <JobItem
              logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              level={job.level}
              department={job.department}
              featured={false}
            />
          ))}
        </div>
      </div>
      <div className='relative z-[2] w-full max-w-[306px]'>
        <div className='sticky top-5 -z-10'>
          <CardJobPost />
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
