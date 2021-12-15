import { required, minLength, email, helpers } from "vuelidate/lib/validators";

const password = helpers.regex("password", /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);

export const register = {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        password,
      },
      name: {
        required,
        minLength: minLength(8),
      },
      role: {},
    },
  },
};

export const login = {
  data() {
    return {
      user: {
        email: "",
        password: "",
        checked: [],
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        password,
      },
    },
  },
};
