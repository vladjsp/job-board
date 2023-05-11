import LocationInput from '../../components/ui-elements/LocationInput';
import SelectInput from '../../components/ui-elements/SelectInput';

import { ChartBarIcon } from '@heroicons/react/20/solid';

const filters = [
  {
    name: 'Location',
    options: ['Austin, TX', 'Miami, FL', 'New York, NY', 'Remote'],
    img: 'https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e859a1e14a2779c3bfb1_icon-1-dropdown-job-categories-job-board-x-template.svg',
  },
  {
    name: 'Job Level',
    options: ['Junior', 'Middle', 'Senior'],
    img: 'https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e859d99a538e3a65f4dc_icon-2-dropdown-job-categories-job-board-x-template.svg',
  },
  {
    name: 'Department',
    options: ['Support', 'Business', 'Marketing', 'Design', 'Development'],
    img: 'https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e85a808c1866139f449f_icon-3-dropdown-job-categories-job-board-x-template.svg',
  },
];

const FilterForm = () => {
  return (
    <div className='container'>
      <div className='relative p-6 z-10 flex flex-wrap flex-col mx-auto  lg:flex-row mb-16 justify-center lg:justify-between items-center border border-solid rounded-2xl shadow-sm bg-white '>
        <div className=' w-[80%] mb-3 justify-center items-center mx-auto md:max-w-[420px]'>
          <LocationInput />
        </div>
        <div className='flex flex-col w-[80%] gap-3 justify-center items-center mx-auto md:max-w-[684px] md:flex-row '>
          {filters.map((filter, i) => (
            <SelectInput
              key={filter.name}
              title={filter.name}
              options={filter.options}
              image={filter.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
