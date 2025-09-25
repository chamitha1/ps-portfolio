import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projects } from "../data/projects";
import 'animate.css';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <Container>
          <Row>
            <Col>
              <div className="project-detail-inner animate__animated animate__fadeIn">
                <h2>Not Found</h2>
                <p>The requested project could not be found.</p>
                <Button variant="light" className="back-btn" onClick={() => navigate(-1)}>Back</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  const renderContent = () => {
    if (Array.isArray(project.content)) {
      return project.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ));
    }
    return <p>{project.content}</p>;
  };

  return (
    <section className="project-detail">
      <Container>
        <Row>
          <Col>
            <div className="project-detail-inner animate__animated animate__slideInUp">
              <Button variant="light" className="back-btn" onClick={() => navigate(-1)}>← Back</Button>
              <div className="project-hero">
                <img src={project.imgUrl} alt={project.title} />
              </div>
              <h2>{project.title}</h2>
              <p className="muted">{project.description}</p>
              <div className="project-content">
                {renderContent()}
              </div>
              <Button variant="light" className="back-btn bottom" onClick={() => navigate(-1)}>← Back</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
