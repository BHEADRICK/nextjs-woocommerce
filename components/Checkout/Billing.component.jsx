import { useForm } from 'react-hook-form';

const Billing = ({ onSubmit }) => {
  const inputClasses =
    'w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <section className="text-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container p-4 py-2 mx-auto">
            <div className="mx-auto lg:w-1/2 md:w-2/3">
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <label for="firstName" className="pb-4">First Name</label>
                  <input
                    className={inputClasses}
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    label="First Name"
                    type="text"
                    {...register('firstName', {
                      required: 'This field is required',
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      ERROR: {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="lastName" className="pb-4">Last Name</label>
                  <input
                    className={inputClasses}
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    label="Last Name"
                    type="text"
                    {...register('lastName', {
                      required: 'This field is required',
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      ERROR: {errors.lastName.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="address1" className="pb-4">Street Address</label>
                  <input
                    className={inputClasses}
                    name="address1"
                    id="address1"
                    placeholder="Street Address"
                    label="Street Address"
                    type="text"
                    {...register('address1', {
                      required: 'This field is required',
                    })}
                  />
                  {errors.address1 && (
                    <span className="text-red-500">
                      ERROR: {errors.address1.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="postcode" className="pb-4">Zip Code</label>
                  <input
                    className={inputClasses}
                    name="postcode"
                    id="postcode"
                    placeholder="Zip Code"
                    label="Zip Code"
                    type="number"
                    {...register('postcode', {
                      required: 'This field is required',
                      minLength: {
                        value: 5,
                        message: 'Zip Code must be 5 digits',
                      },
                      maxLength: {
                        value: 5,
                        message: 'Zip Code must be 5 digits',
                      },
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: 'Zip Code must only be numbers',
                      },
                    })}
                  />
                  {errors.postcode && (
                    <span className="text-red-500">
                      ERROR: {errors.postcode.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="city" className="pb-4">City</label>
                  <input
                    className={inputClasses}
                    name="city"
                    id="city"
                    placeholder="City"
                    label="City"
                    type="text"
                    {...register('city', {
                      required: 'This field is required',
                    })}
                  />
                  {errors.city && (
                    <span className="text-red-500">
                      ERROR: {errors.city.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="email" className="pb-4">Email</label>
                  <input
                    className={inputClasses}
                    name="email"
                    id="email"
                    placeholder="Email"
                    label="Email"
                    type="text"
                    {...register('email', {
                      required: 'This field is required',
                      pattern: {
                        value: /[^@]+@[^@]+\.[^@]+/i,
                        message: 'Email is not valid',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      ERROR: {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <label for="phone" className="pb-4">Phone Number</label>
                  <input
                    className={inputClasses}
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    label="Phone Number"
                    type="text"
                    {...register('phone', {
                      required: 'This field is required',
                      // minLength: {
                      //   value: 10,
                      //   message: 'Minimum 8 tall i Phone Numbernummeret',
                      // },
                      // maxLength: {
                      //   value: 10,
                      //   message: 'Maksimalt 8 tall i Phone Numbernummeret',
                      // },
                      // pattern: {
                      //   value: /^[0-9]+$/i,
                      //   message: 'Ikke gyldig Phone Numbernummer',
                      // },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500">
                      ERROR: {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="paymentMethod"
                    placeholder="paymentMethod"
                    label=""
                    type="hidden"
                    value="cod"
                    checked
                    type="hidden"
                    {...register('paymentMethod')}
                  />
                </div>
                <div className="w-full p-2">
                  <button className="flex px-4 py-2 mx-auto font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400">
                    Submit Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Billing;
