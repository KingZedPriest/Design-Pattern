console.log(
  "Welcome, use the following commands addPhoneNumber(contactDetails) to add. removePhoneNumber(contactDetails) to remove, and dialPhoneNumber(contactDetails) to dial. Create your contact in this format constructor(firstName, lastName, phoneNumber). Thank You."
);

class Telephone {
  constructor() {
    this.observers = new Set();
  }

  //This Method Adds

  addPhoneNumber(contactDetails) {
    this.observers.add(contactDetails);

    console.log(
      `${contactDetails.firstName} ${contactDetails.lastName} Was Added Successfully.`
    );

    return this;
  }

  // This Method Removes
  removePhoneNumber(contactDetails) {
    this.observers.forEach((observer) => {
      if (
        observer.phoneNumber === contactDetails ||
        observer.firstName === contactDetails ||
        observer.lastName === contactDetails ||
        observer === contactDetails
      ) {
        this.observers.delete(observer);
        console.log(
          `${contactDetails.firstName} ${contactDetails.lastName} Was Removed Successfully.`
        );
      }
    });
    return this;
  }

  //This Method Notifies
  dialPhoneNumber(contactDetails) {
    this.observers.forEach((observer) => {
      if (
        observer.phoneNumber === contactDetails ||
        observer.firstName === contactDetails ||
        observer.lastName === contactDetails ||
        observer === contactDetails
      ) {
        observer.update(observer);
      }
    });

    return this;
  }
}

class Contact {
  constructor(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  update(observer) {
    console.log(observer.phoneNumber);
    console.log(`Now Dialling ${observer.phoneNumber}`);
    return observer;
  }
}

// const telephone = new Telephone();

// const henry = new Contact("Henry", "Valentine", 09062145645);
// const charles = new Contact("Charles", "Alexander", 09067789223);

// telephone.addPhoneNumber(henry);
// telephone.addPhoneNumber(charles);

// telephone.removePhoneNumber(charles);
// telephone.dialPhoneNumber(henry);
