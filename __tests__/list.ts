import listPackageVersions from '../src';

test('fetches package versions', async () => {
	const versions = await listPackageVersions('npm-pkg-versions');
	expect(versions).toContain('0.0.0');
});

test('works with scoped packages', async () => {
	const versions = await listPackageVersions('@prisma/client');
	expect(versions).not.toBeNull();
});

test('returns null with gibberish', async () => {
	const packageName = Math.random().toString(36).substr(-11);
	const versions = await listPackageVersions(packageName);
	expect(versions).toBeNull();
});
