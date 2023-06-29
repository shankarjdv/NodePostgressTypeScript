import { Role } from "../models/roles";
import { Module } from "../models/modules";

const seedData: Partial<Role>[] = [
    { roleName: "Admin" },
    { roleName: "User" }];

const moduleData: Partial<Module>[] = [
  {
    module_name: "Module 1",
    desc: "Description for Module 1",
    slugName: "module-1",
    path: "/module-1",
    roleId: 1,
  },
  {
    module_name: "Module 2",
    desc: "Description for Module 2",
    slugName: "module-2",
    path: "/module-2",
    roleId: 1,
  },
  {
    module_name: "Module 3",
    desc: "Description for Module 3",
    slugName: "module-3",
    path: "/module-3",
    roleId: 1,
  },
  {
    module_name: "Module 4",
    desc: "Description for Module 4",
    slugName: "module-4",
    path: "/module-4",
    roleId: 1,
  },
];

export async function seedDatabase() {
  try {
    // Seed roles
    const roles = await Role.bulkCreate(seedData as Role[]);

    console.log("Roles seeded successfully.");

    // Seed modules
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
    console.error("Error seeding data:", error);
  }
}
