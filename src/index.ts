import fetch from 'node-fetch';

const REGISTRY_ENDPOINT = 'https://registry.npmjs.org/';

async function listPackageVersions(packageName: string): Promise<string[] | null> {
	const encodedName = encodeURIComponent(packageName);
	const response = await fetch(`${REGISTRY_ENDPOINT}/${encodedName}`);
	if (!response.ok) {
		if (response.status === 404) {
			return null;
		}

		throw new Error(`Registry API returned status code ${response.status}`);
	}

	const result = await response.json();
	if (!result || !result.versions) {
		throw new Error('Registry API returned invalid response');
	}

	return Object.values(result.versions)
		.map(({ version }: any) => version)
		.filter((version: string) => !!version);
}

export default listPackageVersions;
