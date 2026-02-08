import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const GetHelpPage = lazy(() => import('../pages/get-help/page'));
const GetHelpAddictionTreatmentPage = lazy(() => import('../pages/get-help/addiction-treatment/page'));
const TreatmentsPage = lazy(() => import('../pages/treatments/page'));
const AddictionTreatmentPage = lazy(() => import('../pages/treatments/addiction-treatment/page'));
const MethadoneTreatmentPage = lazy(() => import('../pages/treatments/methadone-treatment/page'));
const SuboxoneTreatmentPage = lazy(() => import('../pages/treatments/suboxone-treatment/page'));
const KadainTreatmentPage = lazy(() => import('../pages/treatments/kadain-treatment/page'));
const QuitAlcoholPage = lazy(() => import('../pages/treatments/quit-alcohol/page'));
const QuitSmokingPage = lazy(() => import('../pages/treatments/quit-smoking/page'));
const AnxietyPage = lazy(() => import('../pages/treatments/anxiety/page'));
const DepressionPage = lazy(() => import('../pages/treatments/depression/page'));
const InsomniaPage = lazy(() => import('../pages/treatments/insomnia/page'));
const ADHDPage = lazy(() => import('../pages/treatments/adhd/page'));
const MedicalWeightLossPage = lazy(() => import('../pages/treatments/medical-weight-loss/page'));
const PharmacistPrescribingPage = lazy(() => import('../pages/treatments/pharmacist-prescribing/page'));
const LocationsPage = lazy(() => import('../pages/locations/page'));
const NorthYorkPage = lazy(() => import('../pages/locations/north-york/page'));
const ThornhillPage = lazy(() => import('../pages/locations/thornhill/page'));
const ScarboroughPage = lazy(() => import('../pages/locations/scarborough/page'));
const EtobicokePage = lazy(() => import('../pages/locations/etobicoke/page'));
const ServiceDetailsPage = lazy(() => import('../pages/service-details/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/get-help',
    element: <GetHelpPage />,
  },
  {
    path: '/get-help/addiction-treatment',
    element: <GetHelpAddictionTreatmentPage />,
  },
  {
    path: '/treatments',
    element: <TreatmentsPage />,
  },
  {
    path: '/treatments/addiction-treatment',
    element: <AddictionTreatmentPage />,
  },
  {
    path: '/treatments/methadone-treatment',
    element: <MethadoneTreatmentPage />,
  },
  {
    path: '/treatments/suboxone-treatment',
    element: <SuboxoneTreatmentPage />,
  },
  {
    path: '/treatments/kadain-treatment',
    element: <KadainTreatmentPage />,
  },
  {
    path: '/treatments/quit-alcohol',
    element: <QuitAlcoholPage />,
  },
  {
    path: '/treatments/quit-smoking',
    element: <QuitSmokingPage />,
  },
  {
    path: '/treatments/anxiety',
    element: <AnxietyPage />,
  },
  {
    path: '/treatments/depression',
    element: <DepressionPage />,
  },
  {
    path: '/treatments/insomnia',
    element: <InsomniaPage />,
  },
  {
    path: '/treatments/adhd',
    element: <ADHDPage />,
  },
  {
    path: '/treatments/medical-weight-loss',
    element: <MedicalWeightLossPage />,
  },
  {
    path: '/treatments/pharmacist-prescribing',
    element: <PharmacistPrescribingPage />,
  },
  {
    path: '/locations',
    element: <LocationsPage />,
  },
  {
    path: '/locations/north-york',
    element: <NorthYorkPage />,
  },
  {
    path: '/locations/thornhill',
    element: <ThornhillPage />,
  },
  {
    path: '/locations/scarborough',
    element: <ScarboroughPage />,
  },
  {
    path: '/locations/etobicoke',
    element: <EtobicokePage />,
  },
  {
    path: '/service-details',
    element: <ServiceDetailsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;