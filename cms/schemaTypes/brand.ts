export default {
  name: 'brand',
  title: 'Brand Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'restaurantName',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }
  ]
};
