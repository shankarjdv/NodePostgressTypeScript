import { Role } from "../models/roles";

const seedData: Partial<Role>[] = [
  { roleName: "AccessLevel1", description:"abcs" },
  { roleName: "AccessLevel2", description:"abcs" },
  { roleName: "AccessLevel3", description:"abcs" },
  { roleName: "AccessLevel4", description:"abcs" },
];

export async function seedRoles() {
  try {
    const roles = await Role.bulkCreate(seedData as Role[]);
    console.log("Roles seeded successfully.");
    return roles;
  } catch (error) {
    console.error("Error seeding roles:", error);
    throw error;
  }
}
