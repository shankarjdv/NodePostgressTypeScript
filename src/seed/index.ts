import { seedRoles } from "./roles";
import { seedModules } from "./modules";
import { seedSubModules } from "./subModules";

export async function seedDatabase() {
  try {
    // Seed roles
    const roles = await seedRoles();

    // Seed modules and associate with roles
    await seedModules(roles);

    // Seed sub-modules
    await seedSubModules();


  } catch (error) {
    console.error("Error seeding data:", error);
    throw error;
  }
}
