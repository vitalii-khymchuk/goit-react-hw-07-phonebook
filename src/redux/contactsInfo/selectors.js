const selectContactInfo = state => state.contactInfo.info;
const selectContactInfoError = state => state.contactInfo.error;
const selectIsContactInfoLoading = state => state.contactInfo.isLoading;

export {
  selectContactInfo,
  selectIsContactInfoLoading,
  selectContactInfoError,
};
