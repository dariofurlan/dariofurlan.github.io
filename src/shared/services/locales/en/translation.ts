const translation = {
    booking_home: {
        generic: {
            register: "Sign Up",
            next: "Next",
            book_init: "Book Attraction",
            restricted_area: "Restricted Area",
        },
        anagr: {
            name: "Name",
            surname: "Surname",
        },
        phone: {
            phone: "Phone",
        },
        email: {
            email: "Email",
        },
        age: {
            age: "I am over 18 years old.",
        },
        privacy: {
            title1: "I declare that I have read and accepted the ",
            inf: "privacy statement regarding the processing of personal information.",
            
        },
        marketing: {
            title1: "I declare that I have read and accepted the ",
            inf: "privacy statement regarding the processing of personal information for marketing purposes.",
            
        },
    },
    booking_status: {
        generics: {
            next: "Next",
            modify: "Modify",
            dismiss: "Cancel",
            confirm: "Confirm",
        },
        pending: {
            attraction: "Choose Attraction",
            booked_for: "Booking Time: ",
            available: "available",
            no_attractions: "There are no attractions available at the moment.",
            opening_hours: "We would like to inform you that the park is open from 10:00 to 18:00.",
        },
        pending_review: {
            summary: "Booking Summary",
            booking_time: "Booking Time: ",
        },
        confirmed_review: {
            confirmed: "Booking Confirmed",
            code: "Booking Code: ",
            reminder: "You can only make one booking at a time.",
        },
        expired: {
            booking_expired: "Booking Expired",
            description: "You have run out of time to complete the booking. Click the button to repeat the booking.",
            repeat: "Repeat Booking",
        },
    },
} as const;

export default translation;