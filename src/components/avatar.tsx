type Props = {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
};

const Avatar = ({
  src,
  alt = 'User Avatar',
  size = 48,
  className = '',
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover border border-neutral-200 dark:border-neutral-700 shadow-sm ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
};

export default Avatar;
