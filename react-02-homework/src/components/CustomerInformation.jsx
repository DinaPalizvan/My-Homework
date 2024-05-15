/* eslint-disable react/prop-types */
export default function CustomerInformation({ customer }) {
  return (
    <div>
      <h1>Hi. My name is {customer.first_name}</h1>
      <h2>My last name is {customer.last_name}</h2>
    </div>
  );
}
