## npm-pkg-versions

### Installation

| tool | command                             |
| ---- | ----------------------------------- |
| yarn | yarn add npm-pkg-versions           |
| npm  | npm install --save npm-pkg-versions |

### Usage

The usage of this package is very simple, as it only exports one function that you pass the packageName to. The function will return `null` if the specified package wasn't found, otherwise it will return an array of versions (strings).

```js
import listPackageVersions from 'npm-pkg-versions';

async function main() {
	const versions = await listPackageVersions('npm-pkg-versions');
	console.log(versions); // => ['0.0.0', '1.0.0', ...]
}

main().catch((err) => console.error(err));
```
