import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Fruits = () => {
  //Fruit Catalog shit
  return (
    <CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
                width={200}
                height={200}
              />
            </div>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Details For fruit</CCardText>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton component="a" href="/details" color="primary" className="me-md-2">
                  View More
                </CButton>
                <CButton color="primary">Add to Favorites</CButton>
              </div>
              <small className="text-medium-emphasis">
                Click View for more Info or Add it to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=6&m=173242750&s=612x612&w=0&h=QJB3WhqIWcF1umqELWFUVu32OJWCuePabFClaMfRWbo="
                width={200}
                height={200}
              />
            </div>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Details For fruit</CCardText>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton color="primary" className="me-md-2">
                  View More
                </CButton>
                <CButton color="primary">Add to Favorites</CButton>
              </div>
              <small className="text-medium-emphasis">
                Click View for more Info or Add it to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://lh3.googleusercontent.com/proxy/cu5PnCbvygH0uhrcDXUzKMvVh9ZdXo-Z8ITaJlrd2Lo22jqW7eje-SvnVhQk00nHPmDar_PvqEIXoNZ7y7IVgtGCLPh7uE0Fwhux2YIsKubqvw"
                width={200}
                height={200}
              />
            </div>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Details For fruit</CCardText>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton color="primary" className="me-md-2">
                  View More
                </CButton>
                <CButton color="primary">Add to Favorites</CButton>
              </div>
              <small className="text-medium-emphasis">
                Click View for more Info or Add it to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/peach-with-half-and-leaves.jpg"
                width={200}
                height={200}
              />
            </div>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Details For fruit</CCardText>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton color="primary" className="me-md-2">
                  View More
                </CButton>
                <CButton color="primary">Add to Favorites</CButton>
              </div>
              <small className="text-medium-emphasis">
                Click View for more Info or Add it to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Fruits
