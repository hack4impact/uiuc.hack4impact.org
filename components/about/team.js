import { Container, Col, Row } from "reactstrap";
import Directors from "./directors";
import Section from "../section";
import TeamData from "../../data/teamData";
import MemberIcon from "../memberIcon";

const TeamSection = () => (
  <Section>
    <Container>
      <Directors directors={TeamData.directors} />
      <Row>
        {TeamData.team.map(member => (
          <MemberIcon
            key={member.name}
            name={member.name}
            role={member.role}
            linkedin={member.linkedin}
          />
        ))}
      </Row>
    </Container>
  </Section>
);

export default TeamSection;
