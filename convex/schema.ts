import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";



const schema = defineSchema({
    ...authTables

});


// const schema = defineSchema({
//     tasks: defineTable({
//         completed: v.boolean(),
//     }),
// });


export default schema;