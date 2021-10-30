import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contact/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContacstError = createAction('contacts/fetchContacstError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction('contact/addContactRequest');
export const deleteContactSuccess = createAction('contacts/addContactsSuccess');
export const deleteContactError = createAction('contacts/addContactsError');

export const changeFilter = createAction('contacts/FILTER');
