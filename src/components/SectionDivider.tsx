export function SectionDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '2rem auto',
        width: '200px',
      }}
    >
      <div style={{ flex: 1, height: '1px', background: 'var(--color-gold-dark)' }} />
      <span style={{ color: 'var(--color-gold-primary)', fontSize: '0.7rem' }}>◆</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--color-gold-dark)' }} />
    </div>
  )
}
