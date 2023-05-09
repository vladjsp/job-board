import { nanoid } from 'nanoid';

import { featuredCompanies } from '../../helpers/featuredCompanies';

import FeaturedCompaniesCardItem from './FeaturedCompaniesCardItem';

const FeaturedCompaniesCard = () => {
  return (
    <div className='mb-10 px-[32px] pt-10 pb-14 border-solid border-[1px] border-[#e4e4ed] rounded-2xl shadow-sm'>
      <div className=''>
        <h4 className='mb-8 mt-0 text-[#171728] text-[22px] font-medium '>Featured companies</h4>
        <div className=''>
          <div className='grid auto-cols-[1fr] gap-3 grid-cols-[1fr] grid-rows-[auto]  '>
            {featuredCompanies.map((item) => (
              <div key={nanoid()} className=''>
                <FeaturedCompaniesCardItem name={item.name} icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompaniesCard;
