/**
 * healthrecords script
 */


/**
     * Place an order for a vehicle
     * @param {composers.healthrecords.updateMedication} updateMedication - the updateMedication transaction
     * @transaction
     */
    function updateMedication(updateMedication){
      console.log('update medication');
    
      var id = updateMedication.patientInfo.patientID;
      return getAssetRegistry('composers.healthrecords.PatientInfo')
        .then(function(ar) {
          return ar.get(id).then(function(info){
            info.medicationArray.push(updateMedication.medicationArray[0]);
            return ar.update(info);
        })
      })
    }
    
    /**
         * Place an order for a vehicle
         * @param {composers.healthrecords.updatePastVisits} updatePastVisits - the updatePastVisits transaction
         * @transaction
         */
    function updatePastVisits(updatePastVisits){
      console.log('update past visits');
      var id = updatePastVisits.patientInfo.patientID;
      return getAssetRegistry('composers.healthrecords.PatientInfo')
        .then(function(ar) {
          return ar.get(id).then(function(info){
            info.pastVisitsArray.push(updatePastVisits.newVisit);
            return ar.update(info);
        })
      })
    }
  //   /**
  //    * Place an order for a vehicle
  //    * @param {composers.healthrecords.sendRecord} sendRecord - the sendRecord transaction
  //    * @transaction
  //    */
  //   function sendRecord(newRecord) {
  //     var doctorid = newRecord.doctor.ID;
    
  //       var ID = newRecord.record.patientID;
  //       console.log("HELLO");
  //     return getParticipantRegistry('composers.participants.Doctor')
  //         .then(function(doctorRegistry) {
  //               console.log("OK");
  //               return doctorRegistry.get(doctorid).then(function(doctor){
  //                 console.log("BBB");
  //                  return doctorRegistry.update(doctor);
  //             })
  //         })
  // }
    /**
         * Place an order for a vehicle
         * @param {composers.healthrecords.updateContact} updateContact - the update transaction
         * @transaction
         */
    function updateContact(updateContact){
      console.log('update contact');
      var assetRegistry;
      var id = updateContact.patientInfo.patientID;
      return getAssetRegistry('composers.healthrecords.PatientInfo')
        .then(function(ar) {
          assetRegistry = ar;
          return assetRegistry.get(id);
        })
        .then(function(asset) {
          asset.contactDetails = updateContact.contactDetails;
          return assetRegistry.update(asset);
        });  
    }