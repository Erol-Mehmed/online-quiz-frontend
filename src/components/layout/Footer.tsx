import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="py-6 text-center text-sm text-gray-600">
          { new Date().getFullYear() } Online Quiz System
        </div>
      </Container>
    </footer>
  );
}
