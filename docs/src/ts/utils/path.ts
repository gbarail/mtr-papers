export function replacePathPrefix(path: string, oldPrefix: string, newPrefix: string) {
  if (!oldPrefix.endsWith('/')) {
    oldPrefix += '/';
  }

  if (!newPrefix.endsWith('/')) {
    newPrefix += '/';
  }

  if (path.startsWith(oldPrefix)) {
    path = `${newPrefix}${path.slice(oldPrefix.length)}`;
  }
  return path;
}