import Sidebar  from './components/Sidebar';
import FormSection from './components/FormSection';


const SidebarFormLayout = () => {


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Section */}
        <Sidebar />

        {/* Form Fields Section */}
        <FormSection />

      </div>
    </div>
  );
};

export default SidebarFormLayout;
