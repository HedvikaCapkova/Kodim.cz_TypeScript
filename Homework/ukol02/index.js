import { patientIds } from './data.js';
const parsePatientId = (patientId) => {
    if (!/^\d{6}\/\d{4}$/.test(patientId)) {
        return null;
    }
    const [datePart, controlPart] = patientId.split('/');
    const fullIdNumber = Number(datePart + controlPart);
    if (fullIdNumber % 11 !== 0) {
        return null;
    }
    const year = Number(datePart.substring(0, 2));
    let month = Number(datePart.substring(2, 4));
    const day = Number(datePart.substring(4, 6));
    const fullYear = year + (year >= 54 ? 1900 : 2000);
    const gender = month > 12 ? 'female' : 'male';
    gender === 'female' ? (month -= 50) : month;
    return {
        year: fullYear,
        month: month,
        day: day,
        gender: gender,
        controlNumber: controlPart,
    };
};
patientIds.forEach((id) => {
    console.log(parsePatientId(id));
});
