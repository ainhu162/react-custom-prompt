import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Confirmation } from './Confirmation.component';

const CanLeavingGuard = ({
  when,
  navigate,
  submit
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastLocation, setLastLocation] = useState(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBlockedNavigation = (nextLocation) => {
    if (!confirmedNavigation) {
      setModalVisible(true);
      setLastLocation(nextLocation);
      return false;
    }
    return true;
  };

  const handleConfirmNavigationClick = () => {
	  submit && submit();
    setModalVisible(false);
    setConfirmedNavigation(true);
  };

  const handleDiscard = () => {
	setModalVisible(false);
    setConfirmedNavigation(true);
  }

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      // Navigate to the previous blocked location with your navigate function
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation]);

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      {/* Your own alert/dialog/modal component */}
      <Confirmation
        isShowConfirmation={modalVisible}
        titleText="Close without saving?"
        contentText="You have unsaved changes. Are you sure you want to leave this page without saving?"
        cancelButtonText="Cancel"
        confirmButtonText="Save changes"
        discardText="Discard changes"
		onDiscard={handleDiscard}
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
      />
    </>
  );
};
export default CanLeavingGuard;