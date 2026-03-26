import * as Path from "node:path";
import { fileURLToPath } from "node:url";
import { APIBuilder, prettyReport } from "../../src/api";

const __dirname = Path.dirname(fileURLToPath(import.meta.url));

async function generateFromLocalPackageFolder() {
    const builder = new APIBuilder();

    const report = await builder
    .localTgzPackage("./packages/my-custom-ig.tgz")
    .typescript({})
    .outputTo("./generated")
    .generate();

    console.log(prettyReport(report));
    if (!report.success) process.exit(1);
}

generateFromLocalPackageFolder().catch((error) => {
    console.error(error);
    process.exit(1);
});
