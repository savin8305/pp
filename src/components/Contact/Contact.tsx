import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  isVisible: boolean;
  setIsFlagOpen: (flag: boolean) => void;
  setOpenSearch: (open: boolean) => void;
  setProfileOpen: (open: boolean) => void;
  setAccountOpen: (open: boolean) => void;
}

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  isVisible,
  setIsFlagOpen,
  setOpenSearch,
  setProfileOpen,
  setAccountOpen,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.target as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        formRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(formRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isVisible]);

  const onClose = () => {
    setContactFormVisible(false);
  };

  useEffect(() => {
    const { name, phone, email, message } = formValues;
    if (name && phone && email && message && Object.keys(errors).length === 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [formValues, errors]);

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    gsap.to(event.target.nextElementSibling, {
      y: -20,
      opacity: 1,
      scale: 0.9,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!event.target.value) {
      gsap.to(event.target.nextElementSibling, {
        y: 0,
        opacity: 0.5,
        scale: 1,
        duration: 0.2,
        ease: "power3.in",
      });
    }
  };

  const validateName = (name: string) => /^[a-zA-Z ]{2,30}$/.test(name);

  const validatePhone = (phone: string) =>
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/.test(phone);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleValidation = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let newErrors: FormErrors = { ...errors };
    let newFormValues: FormValues = { ...formValues, [name]: value };

    if (name === "name" && !validateName(value)) {
      newErrors[name] = "Please enter a valid name.";
      newFormValues[name] = "";
    } else if (name === "phone" && !validatePhone(value)) {
      newErrors[name] = "Please enter a valid phone number.";
      newFormValues[name] = "";
    } else if (name === "email" && !validateEmail(value)) {
      newErrors[name] = "Please enter a valid email address.";
      newFormValues[name] = "";
    } else {
      delete newErrors[name as keyof FormErrors];
    }

    setErrors(newErrors);
    setFormValues(newFormValues);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    nextRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      event.key === "Enter" &&
      !errors[event.currentTarget.name] &&
      formValues[event.currentTarget.name as keyof FormValues]
    ) {
      event.preventDefault();
      nextRef.current?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      console.log("Form submitted successfully!", formValues);
    }
  };

  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
    setIsFlagOpen(false);
    setOpenSearch(false);
    setProfileOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="cursor-pointer font-montserrat  text-16 font-thin rounded-full p-1 pl-4 pr-4 text-white bg-[#483d78]"
        onClick={toggleContactForm}
      >
        Contact
      </button>
      {isContactFormVisible && (
        <div
          ref={contactRef}
          className="fixed top-14 inset-0 flex justify-end items-start md:pt-1 2xl:pt-16 mr-6"
        >
          <form
            ref={formRef}
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
            onSubmit={handleSubmit}
          >
            <button
              className="absolute h-8 w-8 right-2 top-16"
              type="button"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="font-montserrat text-2xl mb-6">
              Get in touch with us.
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className={`w-full p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                  onFocus={handleFocus}
                  onBlur={handleValidation}
                  onChange={handleChange}
                  onKeyDown={(event) => handleKeyDown(event, phoneInputRef)}
                  value={formValues.name}
                />
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-75 ease-in-out bg-white px-1">
                  Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  placeholder=" "
                  required
                  className={`w-full p-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                  onFocus={handleFocus}
                  onBlur={handleValidation}
                  onChange={handleChange}
                  onKeyDown={(event) => handleKeyDown(event, emailInputRef)}
                  value={formValues.phone}
                />
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-200 ease-in-out bg-white px-1">
                  Mobile No
                </label>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                  onFocus={handleFocus}
                  onBlur={handleValidation}
                  onChange={handleChange}
                  onKeyDown={(event) => handleKeyDown(event, messageInputRef)}
                  value={formValues.email}
                />
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-200 ease-in-out bg-white px-1">
                  E-Mail
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  className={`w-full p-3 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                  onFocus={handleFocus}
                  onBlur={handleValidation}
                  onChange={handleChange}
                  value={formValues.message}
                />
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-200 ease-in-out bg-white px-1">
                  Message
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`w-full mt-6 bg-[#483d78] text-white rounded-lg p-3 font-montserrat text-lg focus:outline-none ${
                isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
