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
    <div className='container px-2'>
      <div className='relative px-10 py-11 z-10 flex overflow-visible mb-16 justify-between items-center border-solid border-[1px] rounded-2xl shadow-sm mx-auto bg-white max-[720px]:flex-col'>
        <LocationInput />
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
  );
};

export default FilterForm;
