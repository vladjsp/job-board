import { nanoid } from 'nanoid';

import { jobsList } from '../../data/latestJobs';
import { featuredJobs } from '../../data/featuredJobs';

import JobListItem from '../../components/ui-elements/JobsListItem';
import CardJobPost from '../../components/ui-elements/CardJobPost';
import FeaturedCompaniesCard from '../../components/ui-elements/FeaturedCompaniesCard';
import Button from '../../components/ui-elements/Button';

const JobBoard = () => {
  return (
    <div className='container'>
      <div className='flex flex-col lg:flex-row justify-between mb-24'>
        <div className='w-full max-w-[849px] mr-7'>
          <div className='grid auto-cols-[1fr] gap-4 grid-cols-[1fr] grid-rows-[auto] mb-12'>
            <h2 className='mb-6 mt-0 text-[#171728] text-3xl font-medium '>Featured jobs</h2>
            {featuredJobs.map((job) => (
              <JobListItem
                key={nanoid()}
                logo={job.logo}
                title={job.title}
                company={job.company}
                location={job.location}
                level={job.level}
                department={job.department}
                featured={true}
              />
            ))}
          </div>
          <div className='grid auto-cols-[1fr] gap-4 grid-cols-[1fr] grid-rows-[auto]'>
            <h2 className='mb-6 mt-0 text-[#171728] text-3xl font-medium '>Latest jobs</h2>
            {jobsList.map((job) => (
              <JobListItem
                key={nanoid()}
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
          <div className='flex justify-center flex-wrap mt-10'>
            <Button
              text='Next'
              type='button'
              styles='font-base text-[#33334e] border border-solid border-[#e4e4ed]  hover:bg-[#0061ff] hover:text-white mb-3'
            />
          </div>
        </div>
        <div className='relative z-[2]'>
          <div className='sticky top-5 -z-10 flex flex-col md:flex-row lg:flex-col'>
            <div className='w-full max-w-[306px] mx-auto '>
              <CardJobPost />
            </div>
            <div className='w-full max-w-[306px] mx-auto'>
              {' '}
              <FeaturedCompaniesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
