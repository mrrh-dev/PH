interface GeneralPatient {
  name: string;
  age: number;
  type: string;
  emergencyLevel?: number;
}
interface EmergencyPatient {
  name: string;
  age: number;
  type: string;
  emergencyLevel: number;
}

function getPatientStatus(patient: GeneralPatient | EmergencyPatient): string {
  // write your code here
  if (patient.type === 'general') return 'general patient';
  else if (patient.type === 'emergency' && patient.emergencyLevel === 1)
    return 'critical emergency patient';
  else if (patient.type === 'emergency' && patient.emergencyLevel === 2)
    return 'serious emergency patient';
  else return 'moderate emergency patient';
}
console.log(getPatientStatus({ name: 'Rahim', age: 35, type: 'general' }));
console.log(
  getPatientStatus({
    name: 'Karim',
    age: 60,
    type: 'emergency',
    emergencyLevel: 1,
  }),
);
console.log(
  getPatientStatus({
    name: 'Hasan',
    age: 45,
    type: 'emergency',
    emergencyLevel: 3,
  }),
);
console.log(
  getPatientStatus({
    name: 'nayeem',
    age: 65,
    type: 'emergency',
    emergencyLevel: 2,
  }),
);
