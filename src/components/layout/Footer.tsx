import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t bg-indigo-700 shadow text-white">
      <Container>
        <div className="py-6 text-center text-sm">
          { new Date().getFullYear() } Online Quiz System
        </div>
      </Container>
    </footer>
  );
}
