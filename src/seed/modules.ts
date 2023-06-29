import { Module } from "../models/modules";
import { Role } from "../models/roles";


const moduleData: Partial<Module>[] = [
  {
    module_name: "Module 1",
    desc: "Description for Module 1",
    slugName: "module-1",
    path: "/module-1",
    roleId: 1
  },
  // ... other module data
];

export async function seedModules(roles: Role[]) {
  try {
    const modules = await Module.bulkCreate(moduleData as Module[]);
    console.log("Modules seeded successfully.");

    // Associate modules with roles
    for (const module of modules) {
      const roleId = module.roleId;
      const role = roles.find((r) => r.id === roleId);
      if (role) {
        await role.$add("modules", module);
      }
    }

    console.log("Modules associated with roles successfully.");
  } catch (error) {
    console.error("Error seeding modules:", error);
    throw error;
  }
}
