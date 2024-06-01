
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            {/* main */}
            {children}
        </main>
    </div>
  );
}