import { SubModule } from "../models/subModules";

const subModuleData: Partial<SubModule>[] = [
  {
    sub_module_name: "Sub-Module 1",
    sub_module_desc: "Description for Sub-Module 1",
    moduleId: 1,
    slugName: "sub-module-1",
    path: "/sub-module-1",
    roleId: 1,
  },
  // ... other sub-module data
];

export async function seedSubModules() {
  try {
    await SubModule.bulkCreate(subModuleData as SubModule[]);
    console.log("Sub-modules seeded successfully.");
  } catch (error) {
    console.error("Error seeding sub-modules:", error);
    throw error;
  }
}
