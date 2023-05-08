import LocationInput from './ui-elements/LocationInput';
import SelectInput from './ui-elements/SelectInput';

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
    <div className='relative px-10 py-11 z-10 flex overflow-visible mb-16 justify-between items-center border-solid border-[1px] rounded-2xl shadow-sm mx-auto'>
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
  );
};

export default FilterForm;
