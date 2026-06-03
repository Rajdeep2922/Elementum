import styles from './AvatarGroup.module.css';

/**
 * AvatarGroup — renders an overlapping row of circular avatar images.
 *
 * Props:
 *  - members: array of { id, name, img }
 *  - size: 'sm' | 'md' | 'lg'
 *  - max: max avatars to display (rest shown as +N badge)
 */
export default function AvatarGroup({ members = [], size = 'md', max = 7 }) {
  const visible = members.slice(0, max);
  const extra   = members.length - max;

  return (
    <div
      className={`${styles.group} ${size !== 'md' ? styles[`group--${size}`] : ''}`}
      role="list"
      aria-label="Team member avatars"
    >
      {visible.map((member) => (
        <img
          key={member.id}
          className={styles.avatar}
          src={member.img}
          alt={member.name}
          title={member.name}
          role="listitem"
          loading="lazy"
          width={size === 'sm' ? 36 : size === 'lg' ? 64 : 48}
          height={size === 'sm' ? 36 : size === 'lg' ? 64 : 48}
        />
      ))}

      {extra > 0 && (
        <span
          className={styles.avatar}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--purple)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 700,
          }}
          aria-label={`${extra} more members`}
        >
          +{extra}
        </span>
      )}
    </div>
  );
}
