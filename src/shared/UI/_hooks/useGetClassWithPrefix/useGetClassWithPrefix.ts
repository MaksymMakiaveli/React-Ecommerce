export const useGetClassWithPrefix = (className: string, customPrefix?: string) => {
  const prefix = customPrefix ?? 'ui';

  const rootClass = `${prefix}-${className}`;

  const appendClass = (childClass: string | string[]) => {
    if (Array.isArray(childClass)) {
      return `${rootClass}${childClass.join('-')}`;
    }

    return `${rootClass}${childClass}`;
  };

  return { rootClass, appendClass };
};
