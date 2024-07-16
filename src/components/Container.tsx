function Container({ children } : { children : React.ReactNode }) {
    return (
      <div className="flex justify-center min-h-screen px-10 py-16">
        <div className="w-full max-w-3xl">
          {children}
        </div>
      </div>
    )
}
  
export default Container;