declare module "feather-icons" {
  const icons: Record<string, FeatherIcon>;
  const toSvg: (attrs?: { [key: string]: string }) => string;
  export default icons;
}
