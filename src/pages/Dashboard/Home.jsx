import DocumentMetrics from "../../components/documents/DocumentMetrics";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <DocumentMetrics />
        </div>
      </div>
    </>
  )
}
export default Home
