import { IDrakeRequirement } from './idrake-requirement';

export interface IDrake {
    name: string;
    additionalExperience: number;
    cumulativeExperience: number;
    requirements: IDrakeRequirement[];
}
