// import React, { Component } from 'react';
// import './Form.css';
// import BondProf from './assets/bond_approve.jpg';

// export default class Form extends Component {
//   state = {
//     inputs: {
//         firstname: {
//             inputName: 'Имя',
//             inputValue: '',
//             errors: {
//               emptyMessage: 'Нужно указать имя',
//               wrongMessage: 'Имя указано не верно'
//             }
//           },
//           lastname: {
//             inputName: 'Фамилия',
//             inputValue: '',
//             errors: {
//               emptyMessage: 'Нужно указать фамилию',
//               wrongMessage: 'Фамилия указана не верно'
//             }
//           },
//           password: {
//             inputName: 'Пароль',
//             inputValue: '',
//             errors: {
//               emptyMessage: 'Нужно указать пароль',
//               wrongMessage: 'Пароль указан не верно'
//             }
//           },
//     },
//     admin: {
//         firstname: 'james',
//         lastname: 'bond',
//         password: '007'
//     },
//     errors: {
//         firstname: '',
//         lastname: '',
//         password: ''
//     },
//     isLogin: false
//   };

//   handleOnSubmitForm = e => {
//     let errors = this.state.errors;

//     if (e && e.type === 'submit') {
//       e.preventDefault();
//     }

//     Object.keys(errors).map(
//       error => (errors[error] = this.validateField([error]))
//     );

//     this.setState({
//       errors,
//       isValid: !errors.firstname && !errors.lastname && !errors.password
//     });
//   };

//   handleKeyPress = e => {
//     if (e.key === 'Enter') {
//         this.handleOnSubmitForm();
//       }
//   };

//   handleChange = e => {
//     this.setState({
//       inputs: {
//         ...this.state.inputs,
//         [e.target.name]: {
//           ...this.state.inputs[e.target.name],
//           inputValue: e.target.value
//         }
//       },
//       errors: {
//         firstname: '',
//         lastname: '',
//         password: ''
//       }
//     });
//   };

//   validateField = fieldName => {
//     const { admin, inputs } = this.state;
//     const value = this.state.inputs[fieldName].inputValue;

//     if (value) {
//       if (admin[fieldName] === value.toLowerCase()) {
//         return '';
//       } else {
//         return inputs[fieldName].errors.wrongMessage;
//       }
//     } else {
//       return inputs[fieldName].errors.emptyMessage;
//     }
//   };

//   render() {
//     const { inputs, errors, isLogin } = this.state;

//     return (
//       <div className="app-container">
//         {isLogin ? (
//           <img src={BondProf} className="t-bond-image" alt="bond" />
//         ) : (
//           <div>
//             <form
//               className="form"
//               onKeyPress={this.handleKeyPress}
//               onSubmit={this.handleOnSubmitForm}
//             >
//               <h1>Введите свои данные, агент</h1>
//               {Object.keys(this.state.inputs).map((fieldname, key) => (
//                 <div className="field" key={key}>
//                   <label className="field__label" htmlFor={fieldname}>
//                     <span className="field-label">
//                       {inputs[fieldname].inputName}
//                     </span>
//                   </label>
//                   <input
//                     className={`t-input-${fieldname}`}
//                     type="text"
//                     name={fieldname}
//                     value={inputs[fieldname].inputValue}
//                     onChange={this.handleChange}
//                   />
//                   <span className={`t-error-${fieldname}`}>
//                     {errors[fieldname]}
//                   </span>
//                 </div>
//               ))}
//               <div className="form__buttons">
//                 <input
//                   type="submit"
//                   className="button t-submit"
//                   value="Проверить"
//                   onClick={this.handleOnSubmitForm}
//                 />
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import './Form.css';
import BondProfile from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    inputs: {
      firstname: {
        inputName: 'Имя',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать имя',
          wrongMessage: 'Имя указан не верно'
        }
      },
      lastname: {
        inputName: 'Фамилия',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать фамилию',
          wrongMessage: 'Фамилия указан не верно'
        }
      },
      password: {
        inputName: 'Пароль',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать пароль',
          wrongMessage: 'Пароль указан не верно'
        }
      }
    },
    isAdmin: {
      firstname: 'james',
      lastname: 'bond',
      password: '007'
    },
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isLogin: false
  };

  handleKeyPress = (e) => {
    if(e.key === "Enter" || e.keyCod === 13) {
      console.log('handleKeyPress')
    };
  }
  handleOnSubmitForm = (e) => {
    console.log('handleOnSubmitForm')
  }
  handleChange = (e) => {
    console.log('handleChange');
  }





  render() {
    const { inputs, errors, isLogin } = this.state;

    return (
      <div className="app-container">
        {isLogin ? (
          <img src={BondProfile} className="t-bond-image" alt="картинки нет" />
        ) : (
          <div>
            <form
              className="form"
              onKeyPress={this.handleKeyPress}
              onSubmit={this.handleOnSubmitForm}
            >
              <h1>Введите свои данные, агент</h1>
              {Object.keys(this.state.inputs).map((fieldname, key) => (
                <div className="field" key={key}>
                  <label className="field__label" htmlFor={fieldname}>
                    <span className="field-label">
                      {inputs[fieldname].inputName}
                    </span>
                  </label>
                  <input
                    className={`t-input-${fieldname}`}
                    type="text"
                    name={fieldname}
                    value={inputs[fieldname].inputValue}
                    onChange={this.handleChange}
                  />
                  <span className={`t-error-${fieldname}`}>
                    {errors[fieldname]}
                  </span>
                </div>
              ))}
              <div className="form__buttons">
                <input
                  type="submit"
                  className="button t-submit"
                  value="Проверить"
                  onClick={this.handleOnSubmitForm}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
